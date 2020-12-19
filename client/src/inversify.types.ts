const DependencyType = {
  LocalStorageRepository: Symbol.for('LocalStorageRepository'),
  UserRepository: Symbol.for('UserRepository'),
  PostRepository: Symbol.for('PostRepository'),
  AuthRepository: Symbol.for('AuthRepository'),
  AuthModel: Symbol.for('AuthModel'),
  UserModel: Symbol.for('UserModel'),
  PostModel: Symbol.for('PostModel'),
};

export default DependencyType;
