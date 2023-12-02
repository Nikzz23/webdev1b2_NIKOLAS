# I used a dictionary to easily store and manipulate
# the values of their name and contact numbers
contacts = {
            "Nikolas": '096174525222'
            }

# sorted_contacts = dict(sorted(contacts.items()))

# a function to display the list of options or functions of the phonebook
# it has the following features: display, search, and modify contacts.
def menu():
    print("""+---------------------------------+
| >>>      Contacts Menu      <<< |
+---------------------------------+
    [1]    Display Contacts     
    [2]    Search Contact       
    [3]    Modify Contacts      
    [4]    Exit    
+---------------------------------+

>>> Choose an Option:             """)

# a function to display the phonebook which contains the sorted
# information about their name and number
def display_contacts():
    sorted_contacts = dict(sorted(contacts.items()))
    print("+---------------------------------+")
    print("       [CONTACT INFORMATION]       ")
    print("+---------------------------------+")
    if contacts != {}:
        print("     [Name]     |     [Number]     ")
        print("   ----------   |   ------------   ")
        for name,number in sorted_contacts.items():
            print(f" {name.capitalize():15}| {number}")
    else:
        print("       No Contacts to display      ")
    print("+---------------------------------+")
    print()

# a function to find their name and reveal their number
def search():
    print("+---------------------------------+")
    print("         [SEARCH CONTACTS]         ")
    print("+---------------------------------+")
    print(">>> Enter name: ")
    key = input(">>> ")
    if key.capitalize() in contacts:
        print(">>> Name is in contacts \n    Their number is",contacts[key.capitalize()])
    else:
        print("Name is not in contacts")
    print("+---------------------------------+")
    print()

# a function that modifies the contacts. It has the features to:
# add, delete, update, and clear the contents of the phonebook
def modify():
    while True:
        print("""+---------------------------------+
        [MODIFY CONTACTS]  
+---------------------------------+
    [1] Add          
    [2] Delete            
    [3] Update
    [4] Clear all    
    [5] Back                   
+---------------------------------+

>>> Choose an Option: """)
        choice = input(">>> ")
        if choice == '1':
            print("+------[Add a new Contact]--------+")
            print(">>> Name: ")
            name = input(">>> ")
            if name.capitalize() in contacts:
                print(">>> Name is already in contacts")
            elif name == "":
                print("Try again! Enter a name.")
            else:
                print(">>> Number: ")
                number = input(">>> ")
                contacts[name.capitalize()] = number
                print(">>> Successfully added!")
        elif choice == '2':
            if contacts != {}:
                print("+-------[Delete a Contact]--------+")
                print(">>> Name: ")
                delete = input(">>> ")
                if delete.capitalize() in contacts:
                    contacts.pop(delete.capitalize())
                    print(">>> Successfully deleted")
                else:
                    print(">>> Name is not in contacts")
            else:
                print(">>> All contacts are deleted")
        elif choice == '3':
            if contacts != {}:
                print("+-------[Update a Contact]--------+")
                print(">>> Name:")
                nname = input(">>> ")
                if nname.capitalize() in contacts:
                    newNumber = input(">>> New Number: ")
                    contacts[nname.capitalize()] = newNumber
                    print(">>> Number is successfully updated")
                else:
                    print(">>> Name is not in contacts")
            else:
                print(">>> No contacts can be updated")
        elif choice == '4':
            print("+------[Delete all Contacts?]-----+")
            print(">>> Are you sure to delete all of your contacts? \n    press 'y' to proceed and 'n' to cancel")
            yesno = input(">>> ")
            if yesno.lower() == 'y':
                print(">>> All contacts are deleted")
                contacts.clear()
            elif yesno.lower() == 'n':
                break
            else:
                print(">>> Invalid input. Please try again.")
        elif choice == '5':
            break
        else:
            print(">>> Invalid input. Please try again.")
    print()

# the main function which calls the other functions based on the
# input of the user
def main():
    while True:
        menu()
        option = input(">>> ")
        if option == "1":
            display_contacts()
        elif option == "2":
            search()
        elif option == "3":
            modify()
        elif option == "4":
            print("+-------Program Terminated--------+")
            break
        else:
            print("Invalid input! Please try again.")

print("""
                   ╦
           ╦═╗     ║═╗
           ║═╝hone ╚═╝ook
           ╩                 """)
main()

