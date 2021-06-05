import ListItem from "./ListItem";


function List(props){

    const {data} = props;

    if(data.length==0){
        return(<h1>No Item</h1>);
    }


    else return(
        <div>

            {

                    data.map((meetup)=> <ListItem title={meetup.title}/>)
            }
           
        </div>
    );

}

export default List;