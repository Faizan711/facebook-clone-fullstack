import React from 'react'
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import StorefrontIcon from '@mui/icons-material/Storefront';
import SupervisedUserCircleIcon from '@mui/icons-material/SupervisedUserCircle';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ForumIcon from '@mui/icons-material/Forum';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useStateValue } from './StateProvider';

function Header() {
    const [{user}, dispatch] = useStateValue();
  return (
    <div className='header'>
        <div className="header_left">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHwAAAB8CAMAAACcwCSMAAAAZlBMVEUYd/L///8AcfLP3fsAb/EPdfJJivP2+v/x9v4fe/MAavHT4/yTuPhNj/QAbfHN2/uLtPfm7/2Isffc6f13p/YlfvOhwvm+1fqDrferyfp1pPZUlfQ4iPSnxfmcvPg2gfO90PplnvUWrT4lAAAFSklEQVRogcWbbXeqMAyAA7YiMAqI+DLR3f3/P3kBRUHTNmnrWfZlx1N5bBvSJE0gYkvSlKfr97lrYZS2O39fT2WT8J8EvOH1YbtOZRzHspcbfPhv+CDttof6Y/Akr4pUCAl36lL6j0XcFlW++QA8r7oBbBEpVFflgeGXIrOTJ35WXMLB622miOQ7X2Vbyvbb4c1OCA75JkLsGm94fYSYNevH7GM42mZvhieXlrfgC7xqL+aX3wjPi8wZPeKzwqj5JvjRD33DH53geeugZ+8iWv3ktfC99J72TaTcM+HJLsi0byJ2Gr3D4ZsiILunF7jBR+E1xCHZ0D8OfeUxeO7+butEKkztEPghlKot6PJAgR/w89qbDu/0N3j+iXmPdPm28q/wOvx+P+jqVete4JvPrPmdDhsTPCnc37FhuyxbFheJAe5q13rXrf9m247/KdH7tvgKip0evndhy1j+FNW/Q97Udd6Uh3+nr99179Tj9L0OnjvstxTpdoWY7rq5KnT8XOXn8JYNl1mH2I6brDL0Gy0OP7IXPW5POnQUlSgcxMy7eMJzfLBB1K8pOtHAIXsu/AOeFMxFl6IyoPVw+XzfHvALd+Liy8jWwiF7xDMTvOZqm9ppoFa4bCczO8G52hafLWw9HNSkc3d4w7TpEqzBkB7++PIdvmPadHW1sQ1wiHdzeE2Nfydp7UkQA1yKegbfMndc2CdugoPYzuDc10wRch8mOGRP+AU9A/Qirapug6vLA841bsJg0h+CHyzTzy8mONuqx9qoP6mbSU7G5Rwt/ACvmOomfzTopiogm8T80PFg6OGbjrnq8S/OPipB9rtll4zwnKluEG/RFT+znjPET8BfdY2+7XhzGNYd+LoOAnOduJHOoO/QH6ZMNogS23Du+qV1Dz/wXbcVAudq7bB+wN9yFM49k0f7DvyfjMJX7DhLriNIUu63cDg/2EkTaPjxeKCZywZKflwaBg5xCae/g5/g+nfwK3zzQ9NAcPkN57+Dn4H/mgeDd8APyoPB2YdKQDhR5FIUBlcvg0Kl1GS7XkiHJHHzbv0yKBA8/oqShbyzo5cRSdKkYeZuSwOgsgq07k5ws9t+F8Kr5gT/sp6x/atGMDJOcLvl7I0Mwbw6wX/s8DPlYHGBb+zmqz9YCEeqC5yQx+2PVIIz4QInOEi9M0EY5QInLGjvRhEcSBe4Pb01OJAE19kFfrbPvHedo/VHZm7XtyFoIKTBHOAbgiZtSYGiA7y0BzBjoFhbN90BfrLDxxDZnhxwgFd2ZS9oaZG4SjYLQbyJ5YjEfmLc0yKEhFC6EMB8uOUY6xOnhBAlFSZnfyDwEHkxxvrAeyqMnZsI4TpPSUB2+jMEPGsit8RvAPgz8ctNeQeAz1LezGR/APgs2c+85vCHL645eBc83vDlBQ/vassbvrza4iUQfeGvl3rRkaHwvvDX60zWRa4n/P0il3OF7Ql/v8LmXN77wbHLe4aF94NjZQuMuwIvOF6wQS9V8YHrSlXIRTpecF2RDrU8yQOuL0+iFma5w02FWcSSNGe4uSSNVoznCrcU49HKEB3h1jJE0rWkG5xQgEkpPXWCk0pPCUW3LnBi0a293NgBTi43thZa8+GMQmtbiTkbzioxtxTXc+HM4vrI2FbAg/PbCiJTQwUL7tRQEelbSRhw11aSSNtEQ4b7NNHo2oeIcM/2oQhvnCLB/RunBnlvGaPAg7SMDfLaLGeFh2uWG+U0bxM0wwO3CY7SVGt15xvgUqh1ZV9vLnzWGqrLwwmRFlXOaI51aYpVSG1UqdL1J5tiJ0ka5IzauLQD/wd1xEfgx+h/qwAAAABJRU5ErkJggg==" alt="" />
            <div className="header_input">
                <SearchIcon fontSize='large'/>
                <input type="text" placeholder='Search anything'/>
            </div>
        </div>
        <div className="header_middle">
            <div className="header_option header_option--active">
                <HomeIcon fontSize='large'/>
            </div>
            <div className="header_option">
                <FlagIcon fontSize='large'/>
            </div>
            <div className="header_option">
                <SubscriptionsIcon fontSize='large'/>
            </div>
            <div className="header_option">
                <StorefrontIcon fontSize='large'/>
            </div>
            <div className="header_option">
                <SupervisedUserCircleIcon fontSize='large'/>
            </div>
        </div>

        <div className="header_right">
            <div className="header_info">
                <Avatar src={user.photoURL} />
                <h4>{user.displayName}</h4>
            </div>
            <IconButton>
                <AddIcon/>
            </IconButton>
            <IconButton>
                <ForumIcon/>
            </IconButton>
            <IconButton>
                <NotificationsActiveIcon/>
            </IconButton>
            <IconButton>
                <ExpandMoreIcon/>
            </IconButton>
        </div>
    </div>
  )
}

export default Header 