import { AddToCart } from './AddToCart';
import { ArchiveScenario } from 'services/s3Service';
import { Card, Table, TableBody, TableHead } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
import { Product, Sale, Scenario } from './types';
import { useS3Data } from '../contexts/S3DataContext';
import { useState } from 'react';

export function ProductCard(product: Product) {
  return (
    <Card
      key={product.id}
      imgAlt={product.name}
      imgSrc={product.imageF}
      href={`/${product.who}/${product.page}`}
      className="productCard flex flex-col"
    >
      <h5 className="text-2xl tracking-tight text-gray-900 dark:text-white">{product.name}</h5>
      <div
        className="font-normal text-gray-700 dark:text-gray-400"
        dangerouslySetInnerHTML={{ __html: product.shortDescription ?? '' }}
      />
      <div className="mt-auto">{prices(product)}</div>
    </Card>
  );
}

export function ProductLink(product: Product) {
  return (
    <NavLink to={`/${product.who}/${product.page}`} className="dark:text-amber-200 text-amber-600 font-bold">
      <i>{product.name}</i>
    </NavLink>
  );
}

export function ProductPage(product: Product) {
  return (
    <div className="product mt-14 px-6 pt-4">
      <div className="grid gap-2 md:grid-cols-12 mb-4">
        <div className="col-span-1 md:col-span-12">
          <div className="hidden md:inline col-span-1">{prices(product, true)}</div>
          {covers(product)}
          <div className="flex md:hidden col-span-1 mt-3 -ml-1 -mb-4">{prices(product, true)}</div>
          <div
            className="description mt-4 font-normal text-gray-700 dark:text-gray-400"
            dangerouslySetInnerHTML={{
              __html: product.description !== '' ? product.description : (product.shortDescription ?? ''),
            }}
          />
          <div
            className="includes mt-4 font-normal text-gray-700 dark:text-gray-400"
            dangerouslySetInnerHTML={{ __html: product.includes ?? '' }}
          />
        </div>
      </div>
      <div className="col-span-1 md:col-span-4">
        <Scenarios {...product} />
      </div>
    </div>
  );
}

function covers(product: Product) {
  return (
    <>
      {product.imageF && (
        <img alt={product.name} src={product.imageF} className="inline-block w-full md:w-1/4 md:mr-3 h-auto" />
      )}
      {product.imageB && (
        <img alt={product.name} src={product.imageB} className="inline-block w-full md:w-1/4 h-auto" />
      )}
    </>
  );
}

function prices(product: Product, message: boolean = false) {
  return (
    <div>
      {product.price <= 0 && <h3 className="text-xl font-bold text-red-500 dark:text-red-600">Sold Out!</h3>}
      {product.price > 0 && (
        <div>
          {product.button && (
            <AddToCart
              buttonId={product.button}
              price={`${product.price}`.indexOf('.') > 0 ? product.price.toFixed(2) : product.price + ''}
              customer="us"
            />
          )}
        </div>
      )}
      {product.intPrice > 0 && (
        <div>
          {product.intButton && (
            <AddToCart
              buttonId={product.intButton}
              price={`${product.intPrice}`.indexOf('.') > 0 ? product.intPrice.toFixed(2) : product.intPrice + ''}
              customer="int"
            />
          )}

          {message && product.who === 'lft' && (
            <h5 className="mt-6">
              For international shipping (except Canada), please order this directly from{' '}
              <a
                href="https://www.lefranctireur.org/spip.php?page=article&id_article=147"
                target="_blank"
                rel="noreferrer"
              >
                Le Franc Tireur
              </a>
            </h5>
          )}
        </div>
      )}
    </div>
  );
}
function Scenarios(product: Product) {
  const [popoverData, setPopoverData] = useState<ArchiveScenario | null>(null);
  const [loading, setLoading] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [activePopover, setActivePopover] = useState<string | null>(null);
  const { s3Data, isLoading, error: s3error, refreshData } = useS3Data();

  if (isLoading) {
    return <p>Loading S3 data...</p>;
  }

  if (s3error) {
    return (
      <div>
        <p>S3 Error: {s3error}</p>
        <button onClick={refreshData}>Retry</button>
      </div>
    );
  }

  if (!s3Data) {
    return <p>No S3 data available.</p>;
  }

  async function pop(arc_id: string) {
    setLoading(arc_id);
    setError(null);

    try {
      const api = `https://aslscenarioarchive.com/rest/scenario/list/${arc_id}`;
      const response = await fetch(api);

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setPopoverData(data);
      setActivePopover(arc_id);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch data');
    } finally {
      setLoading(null);
    }
  }

  function closePopover() {
    setActivePopover(null);
    setPopoverData(null);
    setError(null);
  }

  return (
    <>
      {product.scenarios && (
        <>
          <h5 className="mb-2 text-2xl tracking-tight text-gray-900 dark:text-white">Scenarios</h5>
          <Table>
            <TableHead>
              <Table.HeadCell className="whitespace-nowrap p-2">Id</Table.HeadCell>
              <Table.HeadCell className="whitespace-nowrap p-2">Title</Table.HeadCell>
              <Table.HeadCell className="whitespace-nowrap p-2">Details</Table.HeadCell>
            </TableHead>
            <TableBody>
              {product.scenarios.map((s: Scenario) => {
                const s3 = s3Data.find((s3: ArchiveScenario) => s3.scenario_id === s.arc_id);
                return (
                  <Table.Row key={s.id} className={`bg-white dark:border-gray-700 dark:bg-gray-800 align-top`}>
                    <Table.Cell className="whitespace-nowrap p-1">{s.id}</Table.Cell>
                    <Table.Cell className={`p-1 ${s.att}`}>{s.name}</Table.Cell>
                    {s.arc_id && (
                      <Table.Cell className={`p-1 ${s.att}`} title={s.arc_id}>
                        {s3 ? (
                          <table>
                            <tbody>
                              <tr>
                                <td className="pr-5">
                                  {s3.attacker} {s3.playings[0] ? `(${s3.playings[0].attacker_wins})` : ''}
                                </td>
                              </tr>
                              <tr>
                                <td>
                                  {s3.defender} {s3.playings[0] ? `(${s3.playings[0].defender_wins})` : ''}
                                </td>
                              </tr>
                              <tr>
                                <td>Designer: {s3.author}</td>
                              </tr>
                            </tbody>
                          </table>
                        ) : (
                          <button
                            onClick={() => pop(s.arc_id!)}
                            disabled={loading === s.arc_id}
                            className="ml-4 px-2 py-1 bg-blue-500 text-white rounded-sm hover:bg-blue-600 disabled:bg-gray-400"
                          >
                            {loading === s.arc_id ? 'Loading...' : 'Details'}
                          </button>
                        )}
                      </Table.Cell>
                    )}
                    {!s.arc_id && (
                      <Table.Cell className={`p-5 ${s.att}`} title={s.arc_id}>
                        {' '}
                      </Table.Cell>
                    )}
                  </Table.Row>
                );
              })}
            </TableBody>
          </Table>

          {/* Popover Modal */}
          {activePopover && (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
              <div className="bg-white dark:bg-gray-800 rounded-lg p-6 max-w-2xl w-full mx-4 max-h-96 overflow-y-auto">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {popoverData?.title || 'Scenario Details'}
                  </h3>
                  <button
                    onClick={closePopover}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    ✕
                  </button>
                </div>

                {error && <div className="text-red-500 mb-4">Error: {error}</div>}

                {popoverData && (
                  <div className="text-gray-700 dark:text-gray-300">
                    <table className="w-full mb-4">
                      <tbody>
                        <tr>
                          <td>Attacker:</td>
                          <td>
                            {popoverData.attacker}{' '}
                            {popoverData.playings[0] ? `(${popoverData.playings[0].attacker_wins})` : ''}
                          </td>
                        </tr>
                        <tr>
                          <td>Defender:</td>
                          <td>
                            {popoverData.defender}{' '}
                            {popoverData.playings[0] ? `(${popoverData.playings[0].defender_wins})` : ''}
                          </td>
                        </tr>
                        <tr>
                          <td>Designer:</td>
                          <td>{popoverData.author}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}

export function SalesCard(sale: Sale) {
  return (
    <div className="parts flow-root" key={sale.id}>
      <Card key={sale.id} imgAlt={sale.name} imgSrc={sale.imageF} className="mx-2">
        <h5 className="text-2xl tracking-tight text-gray-900 dark:text-white">{sale.name}</h5>
        {prices(sale as Product)}
        <div
          className="font-normal text-gray-700 dark:text-gray-400"
          dangerouslySetInnerHTML={{ __html: sale.description ?? '' }}
        />
        <h5>More Details...</h5>
        <div className="pl-4">
          {sale.links &&
            sale.links.map((s: Product) => (
              <p key={s.id}>
                <ProductLink {...s} />
              </p>
            ))}
        </div>
      </Card>
    </div>
  );
}
