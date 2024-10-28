const download = document.getElementById("price");

download.addEventListener("click", () => {
  const link = document.createElement("a");
  link.download = "price.xlsm";
  link.click();
});
