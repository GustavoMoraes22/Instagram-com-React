import { AiOutlineHome } from 'react-icons/ai'
import { RiGlobalLine } from 'react-icons/ri'
import { FiSend } from 'react-icons/fi'
import { MdMonitor } from 'react-icons/md'

import { BsGear, BsSun } from 'react-icons/bs'
import { BiExit, BiMoon } from 'react-icons/bi'

import LogoInstagram from '../../assets/logo-instagram.svg'

import { Flex, Spacer, Typography } from '../../style'
import * as c from './style'

const menuNav = [
    {
        icon: <AiOutlineHome />,
        menuNome: 'Inicio'
    },
    {
        icon: <RiGlobalLine />,
        menuNome: 'Explorar'
    },
    {
        icon: <FiSend />,
        menuNome: 'Direct'
    },
    {
        icon: <MdMonitor />,
        menuNome: 'IGTV'
    },
    {
        icon: <BsGear />,
        menuNome: 'Ajustes'
    }
]


export function NavBar({ themeToggler, theme }) {

    function GroupText({ title, subTitle }) {
        return (
            <Flex gap='4px'>
                <Typography>{title}</Typography>
                <Typography weight='300' size='12px' height='14px'>
                    {subTitle}
                </Typography>
            </Flex>
        )
    }


    return <c.Container>
        <Flex>
            <c.btnTheme onClick={themeToggler}>
                {theme === 'light' ? <BiMoon /> : <BsSun />}
            </c.btnTheme>
        </Flex>

        <img src={LogoInstagram} alt="logo-instagram" />

        <Flex>
            <c.Profile>
                <img src="https://avatars.githubusercontent.com/u/148918052?v=4" alt="imagem perfil github" />
            </c.Profile>

            <GroupText title="Gustavo de Moraes" subTitle="@_gustavomoraes10" />

        </Flex>

        <Spacer margin='8px' />

        <Flex direction='row' justify='space-between'>
            <GroupText title="148" subTitle="Publicações" />
            <GroupText title="15k" subTitle="Seguidores" />
            <GroupText title="1k" subTitle="Seguindo" />
        </Flex>

        <Spacer />

        <Flex align='start' gap='16px'>
            {
                menuNav.map((menu) => (
                    <c.listIcon key={menu.menuNome}>
                        {menu.icon}
                        <Typography>{menu.menuNome}</Typography>
                    </c.listIcon>
                ))}
        </Flex>

        <Spacer />

        <c.Divider />
        <Spacer margin='8px' />


        <Flex align='start'>
            <c.listIcon>
                <BiExit />
                <Typography>Sair</Typography>
            </c.listIcon>
        </Flex>

    </c.Container>
}