import React from 'react'
import {
    Box,
    Stack,
    Button,
    Typography,
} from '@mui/material'
import {Link} from "react-router-dom"
import "./Error.scss"
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import FormControl from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import LibraryBooksOutlinedIcon from '@mui/icons-material/LibraryBooksOutlined';
import AutoFixHighOutlinedIcon from '@mui/icons-material/AutoFixHighOutlined';
import AccessibleForwardOutlinedIcon from '@mui/icons-material/AccessibleForwardOutlined';
import TableRestaurantOutlinedIcon from '@mui/icons-material/TableRestaurantOutlined';
import BlenderOutlinedIcon from '@mui/icons-material/BlenderOutlined';
import HeadsetMicOutlinedIcon from '@mui/icons-material/HeadsetMicOutlined';
import AddAPhotoOutlinedIcon from '@mui/icons-material/AddAPhotoOutlined';
import PhoneAndroidOutlinedIcon from '@mui/icons-material/PhoneAndroidOutlined';
import DesktopWindowsOutlinedIcon from '@mui/icons-material/DesktopWindowsOutlined';
import SmartToyOutlinedIcon from '@mui/icons-material/SmartToyOutlined';
import LiquorOutlinedIcon from '@mui/icons-material/LiquorOutlined';
import DriveFileRenameOutlineOutlinedIcon from '@mui/icons-material/DriveFileRenameOutlineOutlined';
import SportsBasketballOutlinedIcon from '@mui/icons-material/SportsBasketballOutlined';

function Error() {
    return (
        <Box>
            <Stack >
                <Box sx={{ backgroundColor: "#3fc6f5" }} height="230px">
                    <img alt="" src="https://salt.tikicdn.com/desktop/img/404/city-cloud.png" width="100%" />
                </Box>
                <Box sx={{ backgroundColor: "#fdba13" }} height="120px" px={2} position="relative" >
                    <Stack direction="row" alignItems="center" justifyContent="center" pt={2} spacing={3}>
                        <img alt="" src="https://salt.tikicdn.com/assets/img/404/404.png"></img>
                        <Typography sx={{ fontSize: "22px", color: "#FFFFFF", fontWeight: 550 }} width="405.5px">Xin l???i, trang c???a b???n ??ang t??m ki???m kh??ng t???n t???i!</Typography>
                    </Stack>
                    <img src="https://salt.tikicdn.com/assets/img/404/super.png" alt="" style={{ position: "absolute", bottom: 0, left: "220px" }} />
                </Box>
            </Stack>
            <Stack sx={{ backgroundColor: "#FFFFF", height: "80px" }} px={2} justifyContent="flex-end" alignItems="center" mb={0.2}>
                <Typography sx={{ fontSize: "14px", fontWeight: 550 }}>B???n c?? th??? th??? nh???ng li??n k???t sau</Typography>
            </Stack>
            <Stack sx={{ backgroundColor: "#FFFFF", height: "230px" }} px={2} justifyContent="space-between" alignItems="center" mb={0.2} spacing={4}>
                <Stack direction="row" justifyContent="center" alignItems="flex-start" spacing={1}>
                    {errorIcon.map(item =>
                    <Link to={item.link}>
                        <Box className="widthicon" key={item.id}>
                    <Stack className="erroricon" justifyContent="center" alignItems="center">
                        <item.icon sx={{ fontWeight: 550, color: "#FFF" ,width:"36px" ,height:"36px" }} />
                    </Stack>
                    <Typography textAlign="center" className="Text" sx={{fontSize:"11px",fontWeight:550}}>{item.text}</Typography>
                </Box>
                </Link>
                        
                    )}
                </Stack>
                <Stack direction="row" justifyContent="" alignItems="center" mb={4} spacing={4}>
                    <Button variant="outlined"><KeyboardArrowLeftIcon />Quay l???i trang tr?????c</Button>
                    <Button variant="outlined">Ti???p t???c mua h??ng</Button>
                    <Button variant="outlined">Xem th??ng tin t??i kho???n<KeyboardArrowRightIcon /></Button>
                </Stack>
            </Stack>
            <Stack px={2} sx={{ backgroundColor: "#f7f7f7", height: "100px" }} direction="row" justifyContent="center" alignItems="center" mb={0.2}>
                <Stack px={2}>
                    <Typography sx={{ fontSize: "16px", color: "#4e5052", fontWeight: 550 }}>????ng k?? nh???n b???n tin Tiki</Typography>
                    <Typography sx={{ fontSize: "13px", color: "#4e5052", fontWeight: 550 }}>?????ng b??? l??? h??ng ng??n s???n ph???m v?? ch????ng tr??nh si??u h???p d???n</Typography>
                </Stack>
                <Stack direction="row" spacing={2} >
                <Box component="form" noValidate autoComplete="off" justifyContent="space-between">
                    <FormControl sx={{width:"345px", height:"34px"}} px={2}>
                        <OutlinedInput size="small"  placeholder="?????a ch??? Email c???a b???n" />
                    </FormControl>
                </Box>
                <Button variant="contained">????ng k??</Button>
                </Stack>
            </Stack>
        </Box>
    )
}
const errorIcon = [
    {
        id: 1,
        icon: LibraryBooksOutlinedIcon,
        text: 'S??ch',
        link: '/customer/account/edit',
    },
    {
        id: 2,
        icon: AutoFixHighOutlinedIcon,
        text: 'L??m ?????p-S???c Kh???e',
        link: '/customer/notification'
    },
    {
        id: 3,
        icon: AccessibleForwardOutlinedIcon,
        text: 'Th???i Trang',
        link: '/sale/order/history'
    },
    {
        id: 4,
        icon: TableRestaurantOutlinedIcon,
        text: 'Nh?? c???a ?????i s???ng',
        link: '/customer/address'
    },
    {
        id: 5,
        icon: BlenderOutlinedIcon,
        text: '??i???n gia d???ng',
        link: '/customer/paymentcard'
    },
    {
        id: 6,
        icon: HeadsetMicOutlinedIcon,
        text: 'Ph??? ki???n thi???t b??? s???',
        link: '/nhan-xet-san-pham-ban-da-mua'
    },
    {
        id: 7,
        icon: AddAPhotoOutlinedIcon,
        text: 'M??y ???nh-Quay phim',
        link: '/customer/wishlist'
    },
    {
        id: 8,
        icon: PhoneAndroidOutlinedIcon,
        text: '??i???n tho???i-Laptop-Tablet',
        link: '/customer/review'
    },
    {
        id: 9,
        icon: DesktopWindowsOutlinedIcon,
        text: 'Tivi',
        link: '/customer/coupons'
    },
    {
        id: 10,
        icon: SmartToyOutlinedIcon,
        text: '????? ch??i',
        link: '/customer/coupons'
    },
    {
        id: 11,
        icon: LiquorOutlinedIcon,
        text: 'M??? & b??',
        link: '/customer/coupons'
    },
    {
        id: 12,
        icon: DriveFileRenameOutlineOutlinedIcon,
        text: 'v??n ph??ng ph???m',
        link: '/customer/coupons'
    },
    {
        id: 13,
        icon: SportsBasketballOutlinedIcon,
        text: 'Th??? thao-d?? ngo???i',
        link: '/customer/coupons'
    },

]

export default Error