const Type = () => (
        <div className="d-flex justify-content-center align-items-center">
                <label> 
                <h6 className="fw-normal fs-6 text-start filter-search-label">Type</h6>

                        <select className="from-select filter-search-select fw-bold fs-6">
                             <option className="fw-bold fs-6">Used Card</option>
                             <option className="fw-bold fs-6">SUV</option>
                             <option className="fw-bold fs-6">SEDAN</option>
                        </select>
                </label>

                <div className="vertical-line">
                  
                </div>        

        </div>
)



const Make = () => (
         <div className="d-flex justify-content-center align-items-center">
           <label>
             <h6 className="fw-normal fs-7 text-start filter-search-label">
               Type
             </h6>

             <select className="from-select filter-search-select fs-6 fw-bold">
               <option className="fw-bold fs-6">Infiniti</option>
               <option className="fw-bold fs-6">SUV</option>
               <option className="fw-bold fs-6">SEDAN</option>
             </select>
           </label>

           <div className="vertical-line"></div>
         </div>
        
)




const Year = () => (
  <div className="d-flex justify-content-center align-items-center">
    <label>
      <h6 className="fw-normal fs-7 text-start filter-search-label">
        Year
      </h6>

      <select className=" fw-bold fs-6 filter-search-select">
        <option className="fw-bold fs-6">
          2000
        </option>
        <option className="fw-bold fs-6">
          2010
        </option>
        <option className="fw-bold fs-6">
          2014
        </option>
        <option className="fw-bold fs-6">
          F2024
        </option>
      </select>
    </label>

    <div className="vertical-line"></div>
  </div>
);



const Model = () => (
  <div className="d-flex justify-content-center align-items-center">
    <label>
      <h6 className="fw-normal fs-6 text-start filter-search-label">
        Model
      </h6>

      <select className=" outline-none fw-bold fs-6 filter-search-select">
        <option className="fw-bold fs-6" >
          X2 Coupe SUV
        </option>
        <option className="fw-bold fs-6" >
          X3 SUV
        </option>
        <option className="fw-bold fs-6">
          X3 M SUV
        </option>
        <option className="fw-bold fs-6">
          X4 M Coupe SUV
        </option>
      </select>
    </label>

    <div className="vertical-line"></div>
  </div>
);




const Price = () => (
  <label>
    <h6 className="fw-normal fs-7 text-start filter-search-label">Price</h6>

    <select className="outline-none fw-bold fs-6 filter-search-select">
      <option className="fw-bold fs-6">
        1,20,00,000 
      </option>
      <option className="fw-bold fs-6" >
        1,32,41,000
      </option>
      <option className="fw-bold fs-6" >
        1,34,00,000
      </option>
      <option className="fw-bold fs-6" value="">
        80,00,000
      </option>
    </select>
  </label>
);



 export const FilterAndSearch = () => {
  return (
    
      <section>
        <h1 className="text-center fw-bold fs-1 filter-search-section-title">Which vehicales are you looking for?</h1>
        <div className="d-flex justify-content-center align-items-center  filter-search-box gap-3">
          <Type />
          <Make />
          <Year />
          <Model />
          <Price />

          <button type="button" className="btn btn-primary search-button">
            <i className="bi bi-search"></i>
            <span> Search</span>
          </button>
         
        </div>
      </section>
    
  );
}