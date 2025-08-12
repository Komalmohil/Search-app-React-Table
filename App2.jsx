import { useState } from 'react';

function FilterableProductTable({ employees }) {
  const [filterText,setFilterText]=useState('');

  return (
    <div style={{display: "flex",flexDirection: "column",alignItems: "center",marginTop: "20px", maxWidth:"100%"}}>
       <div style={{width: "900px",border: "1px solid #ccc",padding: "10px",borderRadius:"5px"}}>
        <SearchBar filterText={filterText} onFilterTextChange={setFilterText} />
      <ProductTable employees={employees} filterText={filterText}/>
      </div>
    </div>
  );
}


function ProductRow({employee}) {
  return (
    <tr>
      <td style={{padding:"10px"}}>{employee.name}</td>
      <td style={{padding:"10px"}}>{employee.location}</td>
    </tr>
  );
}

function ProductTable({ employees, filterText }) {
  const rows=[];

  employees.forEach((employee) => {
    if (employee.name.toLowerCase().indexOf(filterText.toLowerCase()) === -1) {
      return;
    }
    rows.push( <ProductRow employee={employee}  key={employee.name} /> );
  });

  return (
   <div style={{ margin:"5px 50px",maxHeight: "500px",overflowY:"auto", border: "1px solid black",marginTop: "10px" }}>
      <table style={{ width: "100%",borderCollapse: "collapse"}}>
        <thead style={{backgroundColor:"#f1f1f1",borderBottom:"1px solid #b9b7b7ff"}}>
          <tr>
            <th style={{ padding:"10px"}}>Name</th>
            <th style={{ padding:"10px"}}>Location</th>
          </tr>
        </thead>
      <tbody>{rows}</tbody>
    </table>
    </div>
  );
}

function SearchBar({filterText,onFilterTextChange}) {
  return (
    <form>
      <input style={{margin:"5px 35px",width:"90%",padding:"4px"}} type="text" value={filterText} placeholder="Search..." onChange={(e) => onFilterTextChange(e.target.value)} />
    </form>
  );
}

const EMP = [
  {name: "Abhi", location: "Kaithal"},
  {name: "Aman", location: "Yamuna nagar"},
  {name: "Joe", location: "Kaithal"},
  {name: "Jane", location: "Hisar"},
  {name: "Jack", location: "Jaipur"},
  {name: "Jill", location: "Agroha"},
  {name: "Arun", location: "Kaithal"},
  {name: "Aditi", location: "Panchkula"},
  {name: "Bandana", location: "Patna"},
  {name: "Bit", location: "Jharkhand"},
  {name: "jim", location: "Hisar"},
  {name: "Corbett", location: "Balotra"},
  {name: "Jam", location: "Panipat"},
  {name: "Band", location: "Mumbai"},
  {name: "Bat", location: "Ranchi"},
];

export default function App() {
  return <FilterableProductTable employees={EMP} />;
}
