import { FaRegComment } from "react-icons/fa"
import { AiFillHeart } from "react-icons/ai"
import { Flex, Typography } from "../../style"
import * as C from './style'
import { randomNumbers } from "../../utils/randomNumbers"

export function InfoProfile({ name, photo, link }) {

    return (
        <Flex direction="row" align="center" justify="space-between">
            <C.Container>
                <C.Link href={link} target="_blank">
                    <C.ProfileImage
                        src={photo} alt="perfil"
                    />
                    <Typography weight="300" size="13px" height="15px">{name}</Typography>
                </C.Link>
            </C.Container>

            <C.Container>
                <AiFillHeart color="red" />
                <Typography weight="300" size="13px" height="15px">{randomNumbers()}</Typography>

                <FaRegComment />
                <Typography weight="300" size="13px" height="15px">{randomNumbers()}</Typography>
            </C.Container>
        </Flex>
    )
}