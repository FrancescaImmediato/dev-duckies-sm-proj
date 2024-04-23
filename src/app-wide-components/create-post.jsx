export default function CreatePost(){
  return (


      <>
        <div className = "card">
          {/*Bellow is navbar that will also contain user pic and name*/}
            <div className="card">
             
                <a href ="https://www.imdb.com/name/nm0331516/">
                <header className="card-header">
                  <div className= "is-flex is-justify-content-space-between">
                  <figure className= "image is-48x48 is-square">
                      <img className= "is-rounded" src = "https://mediaproxy.salon.com/width/1200/https://media2.salon.com/2011/05/ryan_gosling.jpg"></img>
                    </figure>
                      <p>Ryan-gooseling-445</p>
                  </div>
                  </header>
                </a>
             </div>
               {/*Bellow is text form in order to write and submit post*/}
              <form className="text-form">


             
                <textarea className= "textarea is-link is medium" type="text" placeholder = "Share your thoughts..."></textarea>
               
              </form>
               
                <button className="button is-primary">Share</button>
              {/*This is the footer at the bottom of my card
                <div className="card">
          <footer className="card-footer">
            <a href="#" className="card-footer-item">Save</a>
            <a href="#" className="card-footer-item">Edit</a>
            <a href="#" className="card-footer-item">Delete</a>
          </footer>
        </div>*/}
            </div>
 
       
      </>
    )
}
