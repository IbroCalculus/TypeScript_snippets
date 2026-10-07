
// Similar to this is "Type aliases.ts"

let itemStatus: "pending" | "paid" | "shipped" | "delivered";       
// itemStatus can only be assigned one of the four string literal values: "pending", "paid", "shipped", "delivered".



// ------------------------ Example 1 ------------------------
type UserRole = "admin" | "editor" | "viewer";      // Type alias
function createUser(name: string, role: UserRole) {
  console.log(`${name} is a ${role}`);
}

createUser("John", "admin");
createUser("Jane", "editor");
createUser("Ibrahim", "superadmin");    // This won't work because "superadmin" is not a valid UserRole. It will throw a TypeScript error.


// ------------------------ Example 2 ------------------------
type UserX = {
  readonly id: number;     // Read-only property. Cannot be modified after initialization.
  name: string;
  email: string;
  profilePhoto?: string;  // Optional property
};

const userx: UserX = {
  id: 1,
  name: "Ibrahim",
  email: "ibrahim@example.com"
};

userx.id = 2;               // Error: Cannot assign to 'id' because it is a read-only property.
userx.name = "John";        

console.log(userx);



// ------------------------ Example 3 ------------------------
type IDY = string | number;

type UserRoleY = "admin" | "user";

type UserY = {
  id: IDY;
  name: string;
  role: UserRoleY;
};

const userY: UserY = {
  id: 1,
  name: "Ibrahim",
  role: "admin"
};
