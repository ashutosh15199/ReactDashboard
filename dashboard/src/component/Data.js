import {
    BsFillArchiveFill,
    BsFillGrid3X3GapFill,
    BsPeopleFill,
    BsFillBellFill
  } from 'react-icons/bs'
  import { MdOutlineAccountBalanceWallet,MdCrisisAlert } from 'react-icons/md'
  import {FaBorderAll} from 'react-icons/fa'
  import {AiFillDollarCircle} from 'react-icons/ai'
const CardData =[
    {
        "id":1,
        "title":"Earning",
        "earning":"198",
       "progress":"37.5",
       "icon":<AiFillDollarCircle className='card_icon' style={{"color":"green","margin-top":"-2rem"}} />
    },
    {
        "id":2,
        "title":"Order",
        "earning":"2.4",
       "progress":"-2",
        "icon": <FaBorderAll className='card_icon' style={{"color":"purple","margin-top":"-2rem"}}/>
    },
    {
        "id":3,
        "title":"Balance",
        "earning":"2.4",
       "progress":"-2",
        "icon":  <MdOutlineAccountBalanceWallet className='card_icon' style={{"color":"#87CEEB","margin-top":"-2rem"}}/>
    },
    {
        "id":4,
        "title":"Total Sales",
        "earning":"89",
       "progress":"11",
        "icon":<MdCrisisAlert className='card_icon' style={{"color":"red","margin-top":"-2rem"}}/>
    },
];
export default CardData;