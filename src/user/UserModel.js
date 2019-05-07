import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true
  },
  country: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Country'
  }
});

const User = mongoose.model('User', UserSchema);

export default User;
