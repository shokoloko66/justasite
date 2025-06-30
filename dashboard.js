
const user = JSON.parse(sessionStorage.getItem("loggedUser"));
if (!user) window.location.href = "index.html";

document.getElementById("userName").innerText = user.name;
document.getElementById("totalAmount").innerText = user.totalAmount.toFixed(2);
document.getElementById("paidAmount").innerText = user.paidAmount.toFixed(2);
document.getElementById("balanceAmount").innerText = (user.totalAmount - user.paidAmount).toFixed(2);

const tbody = document.getElementById("installmentTable");
user.installments.forEach((item, index) => {
  const tr = document.createElement("tr");
  tr.innerHTML = \`
    <td>\${index + 1}</td>
    <td>\${item.name}</td>
    <td>\${item.percentage}%</td>
    <td>\${item.dueDate}</td>
    <td>\₱\${item.payable.toFixed(2)}</td>
    <td>\₱\${item.paid.toFixed(2)}</td>
    <td>\₱\${(item.payable - item.paid).toFixed(2)}</td>
    <td><a class="button" href="\${item.payLink}" target="_blank">Pay Online</a></td>
  \`;
  tbody.appendChild(tr);
});
