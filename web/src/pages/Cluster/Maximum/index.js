import { Fragment } from 'react'
// Redux
import { useSelector } from 'react-redux'
import Comparison from '../../../components/Comparison'

const Maximum = () => {
  const pairMaximum = useSelector((state) => state.cluster.pairMaximum)
  const information = useSelector((state) => state.cluster.information)

  return (
    <Fragment>
      <Comparison
        data={pairMaximum}
        codnasqId={information.cluster_id}
        query={pairMaximum[0].name}
        target={pairMaximum[1].name}
        imageUrl={information.image_url}
        bioQuery={pairMaximum[0].data.bio_assembly}
        bioTarget={pairMaximum[1].data.bio_assembly}
      />
    </Fragment>
  )
}

export default Maximum
