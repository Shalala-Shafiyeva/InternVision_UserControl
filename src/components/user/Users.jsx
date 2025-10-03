import CreateBtn from './CreateBtn'
import UserItem from './UserItem'
function Users() {
  return (
    <section className="users">
      <div className="head">
      <h2>Users</h2>
        <div className="add_btn">
            <CreateBtn/>
        </div>
      </div>
      <div className="users_list">
        <UserItem/>
      </div>
    </section>
  )
}

export default Users
