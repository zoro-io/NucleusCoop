# Edit this as you will and convert it to a .exe if you wish to modify the functionality

# Get local IP Address and store it as a variable
import socket
hostname = socket.gethostname()
IPAddr = socket.gethostbyname(hostname)
 
print("Your Computer Name is: " + hostname)
print("Your Computer IP Address is: " + IPAddr)

gameID = 2062495040
player = "Player"

# Open and edit bgset.ini files
for file in range(0, 4):
    file1 = open(str(file) + '.ini', 'w')
    L = ["[Config]\nHost=" + IPAddr + "\nNickname=" + player + str(file + 1) + "\nGameID=" + str(gameID + file)]
    file1.writelines(L)
    file1.close()