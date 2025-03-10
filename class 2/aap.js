var item1 = prompt("Enter Your Item1")
var Price1 = +prompt("Enter Your price")

var item2 = prompt("Enter Your Items2")
var Price2 = +prompt("Enter Your Price")

var item3 = prompt("Enter Your Item3")
var Price3 = +prompt("Enter Your Price")

var item4 = prompt("Enter Your Items4")
let Price4 = +prompt("Enter Your price")

let item5 = prompt("Enter Your Items5")
let Price5 = +prompt("Enter Your Price")

var TotalAmount = Price1 + Price2 + Price3 + Price4 + Price5
let Discount;



if (TotalAmount >= 20000) {
    Discount(TotalAmount * 0.1)
}

else if (TotalAmount >= 10000) {
    Discount = (TotalAmount * 0.05)
}

else if (TotalAmount => 5000) {
    Discount = (TotalAmount * 0.03)
}

else (`There is No Discount Is `)




let AmountPayable = TotalAmount - Discount



document.write(
    `
    <table border="" align="center" style="text-align:center;background-color:black;color:white;">
    <tr>
    <th>
        Product Name
    </th>
    <th>
    Product Price
    </th> 
    </tr>
    
    <tr>
    <td>
    ${item1}
    </td>

    <td>
    ${Price1 }
    </td>
    </tr>
    
    <tr>
    <td>
    ${item2}
    </td>

    <td>
    ${Price2}
    </td>


    </tr>
    <tr>
    <td>
    ${item3}
    </td>

    <td>
    ${Price3}
    </td>


    </tr>
    <tr>
    <td>
    ${item4}
    </td>

    <td>
    ${Price4 }
    </td>


    </tr>
    <tr>
    <td>
    ${item5}
    </td>

    <td>
    ${Price5 }
    </td>
</tr>

<tr>
<th>
Total Amount
</th>
<td>
${TotalAmount}
</td>
</tr>

<tr>
<th>
 Discount
</th>
<td> 
${Discount.toFixed(2)}
</td>
</tr>


<tr>
<th>
Amount Payable
</th>
<td>
${ AmountPayable}
</td>
</tr>
</table>

 `
)



// confirm(complete)

