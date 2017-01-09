import { connect } from 'react-redux'
import { incrementCounter, decrementCounter } from '../actions'
import Counter from '../components/Counter'

const mapStateToProps = (state) => ({
  value: state.counter
})

const mapDispatchToProps = ({
  onIncrement: incrementCounter,
  onDecrement: decrementCounter
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter)
