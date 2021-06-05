function ListItem(props){

    const {title} =props;

    return(<div style={{
        fontSize:32,
        padding:10,
    
    }}>
        <span>{title}</span> <button style={{
            fontSize:32,
            backgroundColor: 'darkblue',
            color:'white'
        }}>-</button>
    </div>);
}

export default ListItem;