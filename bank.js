class App extends React.Component {
          constructor(props) {
            super(props);

            this.state = {
                totalBalance: 5725,
                transactions: {
                  '8/21': [{
                    name: 'Mike & Ike Bakery',
                    amount: 30
                  }, {
                    name: 'Check #1234',
                    amount: 1050
                  }],

                  '8/15': [{
                    name: 'Dry Cleaning',
                    amount: 25
                  }]
              }
            }
          }
           renderTableRows =  () => {
           var rows = [];
           Object.keys(this.state.transactions).map((date, key) => { var transactions = this.state.transactions[date];
               transactions.map((transaction) => {
            
           rows.push (
             <tr>
               <td>{date}</td>
               <td >{transaction.name}</td>
               <td>{transaction.amount}</td>
             </tr>
           )
            
           })

          })
           var tby = <tbody>
                 {rows.map((transaction, key) => {
                   return (
                     transaction
                   )
                 })}
               </tbody>
           return tby;
           
           };
            render() {
              return ( 
                 <div>
                  <table className="table table-hover">
                    <thead>
                      <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>Amount</th>
                      </tr>
                    </thead>


                    {this.renderTableRows()}
                  </table>
                 </div>
              );
            }
}
ReactDOM.render(<App />, 
document.getElementById('container'));