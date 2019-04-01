import React from 'react';
import ReactDOM from 'react-dom';
import articulo from './component/articulo';


ReactDOM.render(
    <div>
        <h1>Mi Pagina web</h1>
        <div>{articulo}</div>
        <ul><a href="#">Home</a></ul>
        <ul><a href="#">Nosotros</a></ul>
        <ul><a href="#">Contacto</a></ul>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus aperiam aspernatur assumenda autem dolor
            dolorum enim esse est exercitationem facere impedit iste itaque neque, nulla obcaecati optio pariatur
            possimus praesentium quam qui quisquam reprehenderit rerum tempora unde vero vitae voluptatem. Accusantium
            cumque dignissimos eius facere incidunt ipsam laboriosam magni numquam odio, qui ratione tempora tenetur,
            vitae. Deserunt, enim in laboriosam, magnam minima mollitia non nostrum numquam omnis perspiciatis quis quo
            ratione repellendus similique sit totam vero voluptates. A accusantium aliquam amet asperiores assumenda
            beatae consequatur delectus, distinctio dolor enim esse et eum exercitationem facilis hic ipsam maiores,
            molestias mollitia nesciunt odio officia officiis pariatur perferendis quas qui, quo repellat repellendus
            saepe sequi similique sunt ullam vel voluptate! Asperiores dignissimos, provident. Dicta dolorem dolorum
            enim expedita explicabo fuga fugiat harum numquam officia voluptatem. Ab aut commodi consectetur culpa cum
            cupiditate delectus dolor facere hic itaque maiores minus molestiae, nam nemo nobis nostrum nulla obcaecati,
            odio perferendis quas quibusdam quos ratione repellat repudiandae sit, tempore unde! Cupiditate dolorum
            ipsam optio quidem unde? A aperiam dolor dolore ducimus, est et harum incidunt laborum natus non nulla, odio
            omnis porro quo rem tempora ullam. A animi cum cupiditate delectus ea facere placeat possimus recusandae?</p>

    <h1>©Toni Mas Navarro</h1>
    </div>
    ,document.getElementById('app')
);