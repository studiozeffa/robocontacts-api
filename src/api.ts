import express from 'express';
import { getContacts } from './contacts';

const router = express.Router();

router.get('/contacts', (req, res) => {
  const shouldRandomize = req.query.hasOwnProperty('random');
  const contactsToSend = getContacts(shouldRandomize);
  res.json(contactsToSend);
});

export default router;
