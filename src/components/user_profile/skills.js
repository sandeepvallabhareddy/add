import React,{useState} from 'react'

function Skills()
{
	const [skill,setSkill]=useState(['React','Javascript','CSS'])
	const [Input,setInput]=useState('')
	const saveChanges=()=>{
		setInput('')
		setSkill([...skill,Input])
	}
	return(
		<div className="MainAbout">
			<div className="d-flex  align-items-center justify-content-between SkillsHeading" id="AboutHeading">
				<h2 className="">Key Skills</h2>
				<span data-toggle="modal" data-target="#exampleModal" className="icon-edit-plus" >&#43;</span>
			</div>
			<div id="AboutHeading">
			<div id="SkillsSize">
			<div class="row" id="AllSkills">
				{skill.map( item => <div class="EachSkill">{item}</div> )}
			</div>
			</div>
			</div>
			<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
			  <div class="modal-dialog modal-dialog-centered" role="document">
			    <div class="modal-content">
			      <div class="modal-header">
			        <h5 class="modal-title" id="exampleModalLabel">Enter Your Skill</h5>
			        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
			          <span aria-hidden="true">&times;</span>
			        </button>
			      </div>
			      <div class="modal-body">
			      	<input type="text" value={Input} onChange={event=>setInput(event.target.value)}/>
			      </div>
			      <div class="modal-footer">
			        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
			        <button type="button" onClick={saveChanges} data-dismiss="modal" class="btn btn-primary">Save changes</button>
			      </div>
			    </div>
			  </div>
			</div>
		</div>
	)
}

export default Skills