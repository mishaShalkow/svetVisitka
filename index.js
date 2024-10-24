const download = document.getElementById("price");

download.addEventListener("click", () => {
  const data = "/price.xlsm";
  const file = new Blob([data], { type: "application/vnd.ms-excel" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(file);
  link.download = "price.xlsm";
  link.click();
});
