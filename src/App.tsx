import useExpenses from './api/useExpenses'
import Table from './components/Table'
import TableHead from './components/TableHead'
import TableRow from './components/TableRow'

// Notes - things which I would like to do
// - improve table styling
// - add tests

function App() {
  const { loading, error, expenses } = useExpenses()

  return (
    <main className="m-auto min-h-screen max-w-5xl p-10 bg-gray-100">
      <Table>
        <TableHead />
        <tbody>
          {expenses?.map((expense) => (
            <TableRow key={expense.id} expense={expense} />
          ))}
        </tbody>
      </Table>
      {loading && <p className="text-blue-500">Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
    </main>
  )
}

export default App
