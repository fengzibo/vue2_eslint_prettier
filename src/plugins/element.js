import Vue from 'vue'
import {
    Button,
    Select,
    Option,
    Loading,
    MessageBox,
    Message,
    Notification,
    Row,
    Col,
    Form,
    FormItem,
    Tabs,
    TabPane,
    Tag,
    Menu,
    Submenu,
    MenuItem,
    MenuItemGroup,
    Dropdown,
    DropdownMenu,
    DropdownItem,
    Input,
    InfiniteScroll,
    Container,
    Header,
    Aside,
    Main,
    Footer,
    Steps,
    Step,
    Dialog,
    Checkbox,
    Table,
    TableColumn,
    Radio,
    RadioGroup,
    Popover,
    Tooltip,
    Icon,
    Progress,
    Pagination,
    Card,
    Image,
    Divider,
    Avatar,
    Drawer,
    Link,
} from 'element-ui'
Vue.use(Button)
Vue.use(Select)
Vue.use(Option)
Vue.use(Row)
Vue.use(Col)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Tabs)
Vue.use(TabPane)
Vue.use(Tag)
Vue.use(Menu)
Vue.use(MenuItem)
Vue.use(Submenu)
Vue.use(MenuItemGroup)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Input)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Steps)
Vue.use(Step)
Vue.use(Dialog)
Vue.use(Checkbox)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Radio)
Vue.use(RadioGroup)
Vue.use(Popover)
Vue.use(Tooltip)
Vue.use(Icon)
Vue.use(Progress)
Vue.use(Pagination)
Vue.use(Card)
Vue.use(Image)
Vue.use(Divider)
Vue.use(Avatar)
Vue.use(Drawer)
Vue.use(Link)
Vue.use(InfiniteScroll)
Vue.use(Loading.directive)

Vue.prototype.$loading = Loading.service
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$confirm = MessageBox.confirm
Vue.prototype.$prompt = MessageBox.prompt
Vue.prototype.$notify = Notification
Vue.prototype.$message = Message
