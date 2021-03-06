Github repo: [https://github.com/tvl83/livedu-blockchainexplorer](https://github.com/tvl83/livedu-blockchainexplorer)

#### **Session 1 - Hour 1:** Setting-up the Environment
##### December 3, 2017
[https://docs.google.com/document/d/12VjO6vu4Oq3XacUD6ftSMMz_rGu98GHsnfrBbLQSVHA/edit?usp=sharing](https://docs.google.com/document/d/12VjO6vu4Oq3XacUD6ftSMMz_rGu98GHsnfrBbLQSVHA/edit?usp=sharing)

* Setting up the programming environment
 * VirtualBox
   * Ubuntu 16.04
   * NodeJS (NVM)
 * IDE
 * Atom

**Download Ubuntu**

16.04.3 LTS supported until Jul 2021
[https://www.ubuntu.com/download/server](https://www.ubuntu.com/download/server)
Ubuntu-16.04.3-server-amd64.iso (825MB)

**Download Virtualbox**

[https://www.virtualbox.org/wiki/Downloads](https://www.virtualbox.org/wiki/Downloads)
VirtualBox 5.2.2
VirtualBox-5.2.2-119230-Win.exe (109MB)

**Download BitVise**

[https://www.bitvise.com/ssh-client-download](https://www.bitvise.com/ssh-client-download)
[https://dl.bitvise.com/BvSshClient-Inst.exe](https://dl.bitvise.com/BvSshClient-Inst.exe) (21.8MB)

**Download Atom (IDE)**

[https://atom.io/](https://atom.io/)
AtomSetup-x64.exe (133MB)

If you want to set up a VPS then you can use either of these referral codes. They help me out and will be perfectly fine to use for our project.

[https://www.vultr.com/?ref=6803035](https://www.vultr.com/?ref=6803035)
[https://m.do.co/c/fd67d238a7c4](https://m.do.co/c/fd67d238a7c4)

[https://github.com/creationix/nvm](https://github.com/creationix/nvm)
[https://www.digitalocean.com/community/tutorials/how-to-install-node-js-with-nvm-node-version-manager-on-a-vps](https://www.digitalocean.com/community/tutorials/how-to-install-node-js-with-nvm-node-version-manager-on-a-vps)

#### **Session 1 Hour 2**

* Choose which coin (younger coin is easier, less blocks)
* Setting up our DB Schema
  * How are we going to store the data
* Extract the data from the wallet
  * Store it in the database
  * Cronjobs
 * Set up ReactJS and some basic components and layout
* Get data displayed on screen from db

#### **Session 2**
##### December 10, 2017
Agenda: [https://docs.google.com/document/d/1w5vA6Jxq-m5Tx-_bf-l1CRE9UIiVa3I0EINiiFTab4M/edit?usp=sharing](https://docs.google.com/document/d/1w5vA6Jxq-m5Tx-_bf-l1CRE9UIiVa3I0EINiiFTab4M/edit?usp=sharing)

* Set up models in Sequelize
* Set up Express
* Go over APIs
* Extract info from wallet to database
* Use express endpoints to retrieve that data

#### **Session 3**
##### December 17, 2017
Agenda: [https://docs.google.com/document/d/1-A22NTehPzjJNFhPwm45NbFfGjS4h-ASA8pkWiopksA/edit?usp=sharing](https://docs.google.com/document/d/1-A22NTehPzjJNFhPwm45NbFfGjS4h-ASA8pkWiopksA/edit?usp=sharing)
* Fix path problem in phpMyAdmin
    * $cfg['PmaAbsoluteUri'] =  $_SERVER[HTTP_HOST].dirname($_SERVER[SCRIPT_NAME]);
* Go over solution with lasvegascoin transactions.
    * Different command to get transactions.
* Start saving data to the database
    * Go over the db in PhpMyAdmin to view the data in there and make any changes as needed
* Loop over ~100-500 blocks to import that data to the db
* ~~Start displaying the data on the site~~

#### **Session 4**
##### December 24, 2017
Agenda: [https://docs.google.com/document/d/1BZyn3yNP9kmOSkglTcGSIXS3wc56UTDwKMuvL9VOcKY/edit?usp=sharing](https://docs.google.com/document/d/1BZyn3yNP9kmOSkglTcGSIXS3wc56UTDwKMuvL9VOcKY/edit?usp=sharing)

* Extract block information from wallet
* Extract TX information from wallet
* From the TX information extract VIN and VOUTs
* Save Addresses to DB
* Make sure all relationships work
* Build ledger for a given address.

* Fixes
    * {force:true} in sync function in www file

#### **Session 5**
##### January 7, 2018

* Worked on linking vins to addresses
* Changed setting to auto nuke db on save so that iterations are quicker
* On every save and upload it clears db and then populates the db with 500 blocks
* Worked on linking blocks to

#### **Session 6**
##### February 4, 2018

* Figured out that vins and vouts are linking properly
* Next stream we need to slow down the processing of transactions.
  * Going from block 1 - 253 or higher causes issues in adding information to the database.
  * If I only do blocks 1 - 252 and then do block 253 separately and by itself there are no errors

~~Notes for next stream:
Figure out why some TXIDs are not in the database.
We have 500 blocks but a txid from block 253 is not in the database `txid: 3568c9f67fc0d24451f884a314232ec428512f659f181088bbda78621d04dfc8`~~

#### **Session 7**
##### February 11, 2018

Agenda:
* Verify things are going into the db properly
* Start on the ReactJS side of things to bring the data onto a web page view
* Plan out features we want to include.

#### Miscellany

**_Frameworks/Libraries:_**
* ReactJS ( [https://reactjs.org/](https://reactjs.org/) )
* ExpressJS ( [https://expressjs.com/](https://expressjs.com/)  )
* NodeJS( [https://nodejs.org/en/](https://nodejs.org/en/) )
* Sequelize ( [http://docs.sequelizejs.com/](http://docs.sequelizejs.com/) )

**_Programs:_**
* Atom (IDE)
* Bitvise
* WebStorm
* Oracle VirtualBox
* Ubuntu 16.04

BTC Donations: 1KAHHvWkporBCd77vT5aQ98Bgp15HSFhNE

ETH Donations: 0xF5975505076bb025B976F3DAb7df8227cF060dD0
