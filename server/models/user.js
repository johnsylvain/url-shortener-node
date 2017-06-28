import mongoose, { Schema } from 'mongoose';
import bcrypt from 'bcrypt-nodejs';

const userSchema = new Schema({
  username: String,
  password: String,
  admin: Boolean
});

userSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
}

userSchema.methods.validPassword = function(password) {
  return bcrypt.compareSync(password, this.password)
}

export default mongoose.model('User', userSchema);
