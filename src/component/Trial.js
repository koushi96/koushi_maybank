import product_card from "../data/product_data";
import ReactDOM from 'react-dom/client';

const Trial = () => {
    function ListItem(props) {
        return <li onClick={() => console.log(props.value)}>{props.value}</li>;
    }

    function ChooseElements() {

    const listItems = product_card.map((object) =>
    
        <ListItem key={object.id.toString()} value={object.Element} />
    );
    return (
        <ul>
        {listItems}
        </ul>
    );
    }


    ReactDOM.render(
    <ChooseElements />,
    document.getElementById('root')
    );
}
export default Trial;