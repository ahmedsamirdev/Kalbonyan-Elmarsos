const event = {
    name: "party",
    guestList: ["ahmed", "samir", "mohamed"],
    printGuestList() {
      console.log("list for " + this.name);
  
      this.guestList.forEach((guest) => {
        console.log(guest + " is attending " + this.name);
      });
    },
  };
  
  event.printGuestList();