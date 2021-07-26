import Cluster from '../Cluster'
import Conformer from '../Conformer'

const Filter = () => {
  return (
    <aside className="md:block space-y-4 md:col-span-1">
      <div className="space-y-2">
        <Cluster />
      </div>
      <div className="space-y-2">
        <Conformer />
      </div>
    </aside>
  )
}

export default Filter
