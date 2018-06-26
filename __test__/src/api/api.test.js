import supertest from 'supertest';
import mongoose from 'mongoose';
import {
  server,
} from '../../../src/app.js';
import modelsHelper from '../../../scripts/models.helper.js';
import DrumSet from '../../../src/models/drumSet.js';
import Drum from '../../../src/models/drums.js';

const mockRequest = supertest(server);

const API_URL = '/api/v1/drums';

afterAll(modelsHelper.afterAll);
beforeAll(modelsHelper.beforeAll);
afterEach(modelsHelper.afterEach);


describe('api module', () => {


//   it('mockRequest should exist', () => {
//     expect(mockRequest).toBeDefined();
//   });

//   it('should get [] for Drums off the bat', () => {

//     return mockRequest.get(API_URL).then(results => {
//       expect(JSON.parse(results.text)).toEqual([]);
//     }).catch(err => {
//       fail(err);
//     });

//   });

//   it('should post a Drum', () => {

//     const DrumObj = {
//       drumName: 'Snare',
//       diameter: 8,
//       color: 'zeellll', 
//     };

//     return mockRequest
//       .post(API_URL)
//       .send(DrumObj)
//       .then(results => {

//         try {
//           const Drum = JSON.parse(results.text);
//         //   console.log(results)
//           expect(Drum._id).toBeDefined();
//           expect(Drum.drumName).toBe(DrumObj.drumName);
//         } catch (error) {
//           fail(error);
//         }
//       }).catch(err => fail(err));
//   });

//   it('should add to all Drums after a post', () => {

//     const DrumObj = {
//       drumName: 'Rack Tom',
//       diameter: 10,
//       color: 'brown', 
//     };

//     return mockRequest
//       .post(API_URL)
//       .send(DrumObj)
//       .then(() => {

//         return mockRequest
//           .get(API_URL)
//           .then(results => JSON.parse(results.text))
//           .then(Drums => expect(Drums.length).toBe(1))
//           .catch(err => fail(err));
//       });

//   });


// });

// describe('DrumSet', () => {

//   it('should populate DrumSet', async () => {

//     const DrumSetObj = {
//       name: 'Joshs drum set',
//       color: 'white',
//     };

//     const myDrumSet = await DrumSet.create(DrumSetObj);

//     expect(myDrumSet.name).toBe(DrumSetObj.name);

//     const DrumObj = {
//       drumName: 'Floor Tom',
//       diameter: 25,
//       color:'white',
//       DrumSet: myDrumSet._id,
//     };

//     const newDrum = await Drum.create(DrumObj);

//     const foundNewDrum = await Drum
//       .findById(newDrum._id)
//       .populate('drum')
//       .populate('cymbal')
//       .exec();
//     expect(foundNewDrum.drumName).toBe(DrumObj.drumName);

//   });
// });

// describe('Drum model', () => {

//   it('Model should exist', () => {
//     expect(Drum).toBeDefined();
//   });

//   it('should give zilch when asking for all Drums first time', () => {

//     return Drum.find().then(Drums => {
//       expect(Drums).toEqual([]);
//     }).catch(err => {
//       fail(err);
//     });

//   });

//   it('should create a Drum', () => {

//     // remember to create a rpoiut
//     let drum = new Drum({
//       drumName: 'Pink snare',
//       diameter: 14,
//       color: 'pink',
//     });

//     return drum.save().then(snareCur => {
//       expect(snareCur.drumName).toEqual('Pink snare');
//     }).catch(err => fail(err));
//   });

//   it('should get collection of created Drums', () => {


//     const DrumObj = {
//       drumName: 'Kick',
//       diameter: 22,
//       color: 'red',
//     };

//     return Drum.create(DrumObj).then(drum => {

//       expect(drum.drumName).toBe(DrumObj.drumName);
//       expect(drum.diameter).toBe(DrumObj.diameter);
//       expect(drum._id).toBeDefined();

//       return Drum.find().then(Drums => {
//         expect(Drums.length).toEqual(1);
//         expect(Drums[0].drumName).toBe(DrumObj.drumName);
//       }).catch(err => {
//         fail(err);
//       });

//     });

//   });

//   it('should find one by id', () => {

//     const DrumObj = {
//       drumName: 'Barry Manilow Snare',
//       diameter: 9,
//       color: 'black',
//     };

//     return Drum.create(DrumObj).then(barrySnare => {

//       return Drum.findById(barrySnare._id).then(drum => {

//         expect(drum.drumName).toEqual(DrumObj.drumName);

//       }).catch(fail);

//     }).catch(fail);
//   });

//   it('should delete a Drum - async/await version', async () => {

//     const newDrum = {
//       drumName: 'Aretha Franklin Kick',
//       diameter: 25,
//       color: 'blue',
//     };

//     const drum = await Drum.create(newDrum);

//     expect(drum.drumName).toBe('Aretha Franklin Kick');

//     await Drum.findByIdAndRemove(drum._id);

//     const Drums = await Drum.find();

//     expect(Drums.length).toBe(0);

//   });

//   it('should reject on find when id not found', () => {

//     return Drum.findById('wrong').then(() => {
//       fail('should not get here');
//     }).catch(err => {
//       expect(err).toBeDefined();
//     });
//   });

//   it('should reject on POST or CREATE when no body provided', () => {
//     return Drum
//       .create({})
//       .then(Drum => {
//         fail('should not get here:' + Drum);
//       })
//       .catch(err => {
//         expect(err).toBeDefined();
//       });
//   });

//   it('should reject on FIND then id not found', () => {
//     return Drum.findByIdAndUpdate('wrong', {
//       rank: 100,
//     })
//       .then(() => fail('should not get here'))
//       .catch(err => {
//         expect(err).toBeDefined();
//       });
//   });

  it('should delete item', () => {
    return Drum.findByIdAndDelete('deleted', {
      rank: 100, 
    })
      .then(() => fail('should not get here'))
      .catch(err => {
        expect(err).toBeDefined();
      });
  });
  
});