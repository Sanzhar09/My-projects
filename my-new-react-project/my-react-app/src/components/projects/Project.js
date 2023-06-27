import './style.css'

const Project = ({title,img}) => {
    return ( 
        <li className="project">
             <a href="https://github.com/Sanzhar09/Sanzhar-s-projects">
                 <img src={img} alt={title} className="project__img"/>
                 <h3 className="project__title">{title}</h3>
             </a>
         </li> 
     );
}
 
export default Project;