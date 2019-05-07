import mongoose from 'mongoose';

const CountrySchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
    required: true
  }
});

const Country = mongoose.model('Country', CountrySchema);

export default Country;
