import { deleteSchool, hideModal } from '../actions'

const DeleteSchoolModal = ({ school, dispatch }) => (
  <div>
    <p>Confirm deleting {school.name}?</p>
    <button onClick={() => {
      dispatch(deleteSchool(school.id)).then(() => {
        dispatch(hideModal())
      })
    }}>
      Yes
    </button>
    <button onClick={() => dispatch(hideModal())}>
      Nope
    </button>
  </div>
)

export default connect(
  (state) => ({
    school: state.schoolProfile
  })
)(DeleteSchoolModal)
