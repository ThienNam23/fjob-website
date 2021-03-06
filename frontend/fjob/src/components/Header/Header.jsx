import { Bolt, BusinessCenter, Edit, FeaturedPlayList, LocationOn } from "@mui/icons-material";
import { ListItemIcon, MenuItem, MenuList, Paper } from "@mui/material";
import { useState } from "react";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";
import "./style.css";

const cvMenuItems = [
    {
        id: 1,
        title: "Tạo CV",
        icon: <Edit fontSize="small" />,
        link: "/your-cv/edit"
    },
    {
        id: 2,
        title: "Quản lý CV",
        icon: <FeaturedPlayList fontSize="small" />,
        link: "/your-cv"
    }
];

const jobMenuItems = [
    {
        id: 1,
        title: "Việc làm theo kỹ năng",
        icon: <Bolt fontSize="small" />,
        link: "/jobs/skills"
    },
    {
        id: 2,
        title: "Việc làm theo chức vụ",
        icon: <BusinessCenter fontSize="small" />,
        link: "/jobs/positions"
    },
    {
        id: 3,
        title: "Việc làm theo địa điểm",
        icon: <LocationOn fontSize="small" />,
        link: "/jobs/locations"
    }
]


const Header = () => {

    const [showJobDrdwMenu, setShowJobDrdwMenu] = useState(false);
    const [showCvDrdwMenu, setShowCvDrdwMenu] = useState(false);

    return (
        <Navbar className="_header" variant="dark" fixed="top">
            <Navbar.Brand as={Link} to="/" className="_header-brand ms-3">
                <img
                    alt=""
                    src={logo}
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />{' '}
                FJob
            </Navbar.Brand>
            <Container>
                <Nav className="me-auto">
                    <Nav.Link className="_header-link"
                        as={Link}
                        to="/jobs"
                        onMouseOver={() => setShowJobDrdwMenu(true)}
                        onMouseLeave={() => setShowJobDrdwMenu(false)}>
                        <span className="_header-link-title fw-bold">Việc IT</span>
                        <Paper className={"_header-dropdown-menu" + (showJobDrdwMenu ? ' _header-dropdown-menu-show' : '')}>
                            <MenuList>
                                {jobMenuItems.map(item => {
                                    const { id, title, icon, link } = item;
                                    return (
                                        <Link to={link} className="_header-link-title">
                                            <MenuItem className="py-1" key={id}>
                                                <ListItemIcon style={{ verticalAlign: "middle" }}>
                                                    {icon}
                                                </ListItemIcon>
                                                <span className="_header-link-title">{title}</span>
                                            </MenuItem>
                                        </Link>
                                    );
                                })}
                            </MenuList>
                        </Paper>
                    </Nav.Link>
                    <Nav.Link className="_header-link" as={Link} to="/companies">
                        <span className="_header-link-title fw-bold">Công ty</span>
                    </Nav.Link>
                    <Nav.Link className="_header-link"
                        as={Link}
                        to="/your-cv"
                        onMouseOver={() => setShowCvDrdwMenu(true)}
                        onMouseLeave={() => setShowCvDrdwMenu(false)}>
                        <span className="_header-link-title fw-bold">{`Hồ sơ & CV`}</span>
                        <Paper className={"_header-dropdown-menu" + (showCvDrdwMenu ? ' _header-dropdown-menu-show' : '')}>
                            <MenuList>
                                {cvMenuItems.map(item => {
                                    const { id, title, icon, link } = item;
                                    return (
                                        <Link to={link} className="_header-link-title">
                                            <MenuItem className="py-1" key={id}>
                                                <ListItemIcon style={{ verticalAlign: "middle" }}>
                                                    {icon}
                                                </ListItemIcon>
                                                <span className="_header-link-title">{title}</span>
                                            </MenuItem>
                                        </Link>
                                    );
                                })}
                            </MenuList>
                        </Paper>
                    </Nav.Link>
                </Nav>
                <Button size="sm" className="me-2" variant="outline-primary">Đăng nhập</Button>
                <Button size="sm" className="me-2" variant="success">Đăng ký</Button>
                <Button size="sm" variant="secondary" title="Dành cho nhà tuyển dụng">Đăng tuyển</Button>
            </Container>
        </Navbar>
    );
}

export default Header;