import { MessageOutlined,  SearchOutlined, ExclamationOutlined, DownOutlined } from "@ant-design/icons";
import { Badge, Space} from "antd";
import header from "../images/header.jpg"


function Header() {
  return (
    <div className="AppHeader">
       <Space>
        <Badge >
          <SearchOutlined/>
        </Badge>
        <Badge >
          <MessageOutlined/>
        </Badge>
        <Badge >
          <ExclamationOutlined />
        </Badge>
        <Badge >
          <img width={20} src={header}></img>
        </Badge>
        <Badge >
          <p>Jahfal</p>
        </Badge>
        <Badge >
          <DownOutlined />
        </Badge>
      </Space>
      
    </div>
  );
}
export default Header;
