import { StyledCard } from "./styles/Card.styled"

export default function Card({item: { id, title, body, image }}) {
    return (
        <StyledCard layout={id % 2 === 0 && 'row-reverse'} >
            <div>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
            <div>
                <img src={`https://raw.githubusercontent.com/bradtraversy/huddle_styled_components/6033c3b282d305910a8b1424f80e2f31f629d653/public/images/${image}`} />
            </div>
        </StyledCard>
    )
}