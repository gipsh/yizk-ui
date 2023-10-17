

function Page(props) {

  return (
    <table> 
        <tbody>
            <tr>
                <td>
                     <img 
                        src={process.env.PUBLIC_URL + props.originalImage} 
                        alt={props.name} />
                </td>   
                <td>
                    <img 
                        src={process.env.PUBLIC_URL + props.translatedImage} 
                        alt={props.name} />
                </td>
            </tr>
        </tbody>
    </table>
  );
}

export default Page;