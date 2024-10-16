const data = [
  {
    id: 1,
    title: "Request A",
    "request date": "2023-10-01",
    "submitted by": "John Doe",
    status: "Pending",
  },
  {
    id: 2,
    title: "Request B",
    "request date": "2023-10-02",
    "submitted by": "Jane Smith",
    status: "Approved",
  },
  {
    id: 3,
    title: "Request C",
    "request date": "2023-10-03",
    "submitted by": "Alice Johnson",
    status: "Rejected",
  },
  {
    id: 4,
    title: "Request D",
    "request date": "2023-10-04",
    "submitted by": "Bob Brown",
    status: "Pending",
  },
  {
    id: 5,
    title: "Request E",
    "request date": "2023-10-05",
    "submitted by": "Charlie Davis",
    status: "Approved",
  },
  {
    id: 6,
    title: "Request F",
    "request date": "2023-10-06",
    "submitted by": "Diana Evans",
    status: "Rejected",
  },
  {
    id: 7,
    title: "Request G",
    "request date": "2023-10-07",
    "submitted by": "Ethan Foster",
    status: "Pending",
  },
  {
    id: 8,
    title: "Request H",
    "request date": "2023-10-08",
    "submitted by": "Fiona Green",
    status: "Approved",
  },
  {
    id: 9,
    title: "Request I",
    "request date": "2023-10-09",
    "submitted by": "George Harris",
    status: "Rejected",
  },
  {
    id: 10,
    title: "Request J",
    "request date": "2023-10-10",
    "submitted by": "Hannah White",
    status: "Pending",
  },
  {
    id: 10,
    title: "Request J",
    "request date": "2023-10-10",
    "submitted by": "Hannah White",
    status: "Pending",
  },
];

const tableBody = document.querySelector("tbody");
//redenrs the table
data.forEach((item) => {
  const row = document.createElement("tr");
  Object.values(item).forEach((value) => {
    const cell = document.createElement("td");
    cell.classList.add("text-center");

    cell.textContent = value;
    row.appendChild(cell);
    if (value === "Pending") {
      cell.classList.add(".table-warning");
    }
  });
  tableBody.appendChild(row);
});
