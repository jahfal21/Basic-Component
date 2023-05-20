import DataUsers from "../Data/DataUsers";
import DataTable from "../Data/dataTable";

const Users = () => {
    const columns = [
        {
          title: 'username',
          dataIndex: 'username',
          key: 'username',
        },
        {
          title: 'email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Action',
          dataIndex: 'isDeleted',
          key: 'action',
        },
      ];
      return <DataTable columns={columns} items={DataUsers} />;
}

export default Users;