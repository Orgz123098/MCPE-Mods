function procCmd(command){
  var cmd = command.split(" ");
  if(cmd[0] == "give"){
    if(cmd[1] == "1"){
      if(cmd[2] == "1"){
        Player.addItemInventory(1, 1, 0);
      }
    }
  }
  if(cmd[0] == "give"){
    if(cmd[1] == "1"){
      if(cmd[2] == "2"){
        Player.addItemInventory(1, 2, 0);
      }
    }
  }
  if(cmd[0] == "give"){
    if(cmd[1] == "1"){
      if(cmd[2] == "3"){
        Player.addItemInventory(1, 3, 0);
      }
    }
  }
}
