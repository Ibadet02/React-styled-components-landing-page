import { Flex } from "./styles/Flex.styled";
import { Container } from "./styles/component.styled";
import { StyledFooter } from "./styles/Footer.styled";
export default function Footer(){
return <StyledFooter>
        <Container>
            <img src="https://raw.githubusercontent.com/bradtraversy/huddle_styled_components/6033c3b282d305910a8b1424f80e2f31f629d653/public/images/logo_white.svg" alt="" />
            <Flex>
                <ul>                    
                    <li>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</li>
                    <li>(+99450)692-23-21</li>
                    <li>ibadetismayilov20@gmail.com</li>
                </ul>
                <ul>                    
                    <li>About Us</li>
                    <li>What We Do</li>
                    <li>FAQ</li>
                </ul>
                <ul>                    
                    <li>Career</li>
                    <li>Blog</li>
                    <li>Contact us</li>
                </ul>
            </Flex>
            <p>&copy; All rights reserved</p>
        </Container>
    </StyledFooter>
}