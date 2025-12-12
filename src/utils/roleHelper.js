export const isAdmin = (user) => {
  if (!user || !user.roles) return false;
  return user.roles.some(role => 
    role.nombre === 'admin' || 
    role.nombre === 'administrator' ||
    role.nombre === 'ADMIN'
  );
};

export const isClient = (user) => {
  if (!user || !user.roles) return false;
  return user.roles.some(role => 
    role.nombre === 'client' || 
    role.nombre === 'user' ||
    role.nombre === 'CLIENT'
  );
};

export const hasRole = (user, roleName) => {
  if (!user || !user.roles) return false;
  return user.roles.some(role => 
    role.nombre.toLowerCase() === roleName.toLowerCase()
  );
};