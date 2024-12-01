import React, { useContext, createContext } from 'react';

import { useAddress, useContract, useContractWrite ,} from '@thirdweb-dev/react';
import { ethers } from 'ethers';


const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
  const { contract } = useContract('0x11A27C66782b99C3FF7F3D3B813f7B8eB2696C70');

  const {contract : userContract} = useContract('0x8D6871A8A8AE9caFCb412D8a56B5024c2EEc95E0');
  const { mutateAsync: updateUserProfile } = useContractWrite(userContract, "updateUserProfile")
  const address = useAddress();
  // const {mutateAsync : users} = useContractRead(userContract,"users")
  const updateProfile = async (form) => {
    try {
      const data = await updateUserProfile([
        form.title, 
        form.description, 
        form.image,
         form.mail, 
         form.twitter, 
         form.github 
        ]);
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  }

  const getProfile = async () =>{
    try{
      const user = await userContract.call('getUserProfile',address);
        console.info("contract call successs", user);
        return user;
    }catch(err){
      console.error("contract call failure", err);
    }
  }


const { mutateAsync: postProject } = useContractWrite(contract, "postProject")
const { mutateAsync: postProposal} = useContractWrite(contract, "postProposal")
const { mutateAsync: approveProposal} = useContractWrite(contract, "approveProposal")
const { mutateAsync: rejectProposal } = useContractWrite(contract, "rejectProposal")

  const createProject= async (form) => {
    try {
      const data = await postProject([
        form.title,
        form.description,
        form.budget,
        new Date(form.deadline).getTime(),
        form.image ]);
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  }
  const createProposal = async(form) =>{
    try {
      const data = await postProposal([
        form.id,
        form.description,
        form.amount,
       ]);
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  }
  const getProjects = async () => {
    
        const projects = await contract.call('getProjects');
        const parsedProjects = projects.map((project, i) => ({
          owner: project.owner,
          title: project.title,
          description: project.description,
          budget: ethers.utils.formatEther(project.budget.toString()),
          deadline: project.deadline.toNumber(),
          image: project.image,
          freelancer : project.freelancer,
          updates : project.updates,
          isApproved : project.isApproved,
          proposals : project.proposals,
          status : project.status,
          pId: i
        }));
    
        return parsedProjects;
      }

  const getProposalsFromContract = async (_projectId) => {
    try{
      const proposals = await contract.call('getProposals',_projectId);
      const parsedProposals = proposals.map((proposal, i) => ({
          description: proposal.description,
          amount: ethers.utils.formatEther(proposal.amount.toString()),
          isAccepted : proposal.isAccepted,
          isRejected : proposal.isRejected,
          pId: i
        }));
        console.info("contract call successs", parsedProposals);
        return parsedProposals;
    }catch(err){
      console.error("contract call failure", err);
    }
     
   }

   const approve = async (_projectId,_proposalOwner) => {
    try {
      const data = await approveProposal([ _projectId, _proposalOwner ]);
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  }

  const reject = async (_projectId,_proposalOwner) => {
    try {
      const data = await rejectProposal([ _projectId, _proposalOwner ]);
      console.info("contract call successs", data);
    } catch (err) {
      console.error("contract call failure", err);
    }
  }

  const acceptProject = async (_projectId,amount) => {
      const data = await contract.call('AcceptProject',_projectId,{ value: ethers.utils.parseEther(amount)});
    }
  


  return (
    <StateContext.Provider
      value={{ 
        address,
        contract,
        createProject,
        getProjects,
        updateProfile,
        getProfile,
        createProposal,
        getProposalsFromContract,
        approve,
        reject,
        acceptProject,
      }}
    >
      {children}
    </StateContext.Provider>
  )
}


export const useStateContext = () => useContext(StateContext);