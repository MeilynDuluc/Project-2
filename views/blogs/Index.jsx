const React = require('react');
const Default = require('../layouts/Default.jsx')

class Index extends React.Component{
    render(){
        const {blogs} = this.props
        return(
            <Default title="Adventures of Theodore">
            
                <nav>
                   
                </nav>
                <ul>
                    {
                        blogs&&blogs.map((blog) => {
                            const {name, color, image} = blog
                            return (
                                <li key={blog._id}>
                                    <a href={`/blog/${blog._id}`}>
                                    {name}</a>  {color}
                                    
                                     <br/>
                                     <a href="https://www.instagram.com/theodoreable_doodle/"></a>
                                     
        







                                        {/* <img src={`${image}`}></img>> */}
                                    
                                    <br/>
                                    <form method="POST" action={`/blog/${blog._id}?_method=DELETE`}>
                                        <input type="submit" value={`Delete ${name}`}/>
                                    </form>
                                </li>
                            )
                        })
                    }
                </ul>
            </Default>
        )
    }
}

module.exports = Index







