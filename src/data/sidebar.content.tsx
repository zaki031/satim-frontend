
import { LayoutDashboard,ChartBar, NotebookText, CalendarDays, MessageSquare, Bell , Settings} from 'lucide-react';

let sideBarContent = [


{
    title : "Dashboard",
    icon : ( <LayoutDashboard  size={32} /> ),
    route : "/"
},
{
    title : "Analytics",
    icon : ( <ChartBar  size={32} />),
    route : "/analytics"
},

{
    title: "Inbox",
    icon: ( <MessageSquare  size={32} />),
    route: "/inbox"
},



]

export default sideBarContent;

