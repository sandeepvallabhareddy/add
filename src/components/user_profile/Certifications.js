import React,{useState,useEffect} from 'react'
import {YearPicker} from 'react-dropdown-date'

function Certifications()
{
	const [experiences,setExperience]=useState([])
	const [delet,setDelete]=useState(false)
	const initialState={
		title:'',
		body:'',
		DurationFrom:'',
		DurationTo:'',
		Attachment:''
	}
	const [Input,setInput]=useState(initialState)
	const [key,setKey]=useState(0)
	const [change,setChange]=useState(true)
	console.log(Input,"dsfffffffffff")
	useEffect(()=>{
		const filteredItem=experiences.filter(item=>item.data.key==key)
		const ppp=filteredItem
		setInput(filteredItem)
		filteredItem.map(item=>setInput(item.data))
		console.log("filtttterrr",filteredItem)
		console.log("useeffect",Input,Input.OrganizationName,Input.Location)
	},[change])
	const handleInput=(event)=>{
		event.persist()
		setInput(Input=>({...Input,[event.target.name]:event.target.value}))
		console.log(Input)
	}
	const saveChanges=(event)=>{
		console.log("reeeenterrrr")
		event.persist()
		let check=true
		experiences.map(item=>{
			if(item.data.key==Input.key)
			{
				console.log("data found")
				item.data=Input
				check=false
			}
		})
		if(check)
		{
			setExperience([...experiences,{data:{...Input,key:Date.now()}}])
		}
		setInput({})
		setDelete(false)
	}
	const editValues=(key)=>{
		setDelete(true)
		console.log("Entered")
		setKey(key)
		setChange(!change)
	}
	const Reset=(event)=>{
		event.persist()
		setInput({})
		setDelete(false)
	}
	const fileUpload=(event)=>{
		setInput({...Input,Attachment:event.target.files[0]})
	}
	const deleteChanges=()=>{
		setDelete(false)
		var filterItems=experiences.filter(item => item.data.key!==Input.key)
		console.log("Delete")
		console.log(Input.key,filterItems)
		setExperience([...filterItems])
		setInput(initialState)
	}
	return(
		<div className="Modal-About">
			<div className="d-flex justify-content-between align-items-center">
				<h2 className="">Certifications</h2>
				<span data-toggle="modal" data-target=".certifications-bd-example-modal-lg"className="icon-edit-plus" >&#43;</span>
			</div>
			{experiences.map(data=>(
					<div class="d-flex align-items-center justfiy-content-end" key={data.data.key}>
						<div class="data-container text-center">
							<img src={require('./images/graduate-cap.png')} alt="cap"/>
						</div>
						<div  class="w-100">
							{console.log(data.data.key,"entereeeee",data,Input)}
							<div class="d-flex align-items-start justify-content-between">
								<div class="modal-display-main-element"> 
									<span class="modal-display-element-heading d-block">{data.data.title}</span>
									<span class="modal-display-element d-block">{data.data.body}</span>
									<span class="modal-display-element-duration text-muted">{data.data.DurationTo}</span>
									<span class="modal-display-element-duration text-muted">{data.data.DurationTo?'':'Present'}</span>
								</div>
								<span onClick={()=>editValues(data.data.key)} data-toggle="modal" data-target=".certifications-bd-example-modal-lg" className="fa fa-pencil  icon-edit-start"></span>
							</div>
							<hr></hr>
						</div>
					</div>
				))}
			<div class="modal fade certifications-bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
			  <div class="modal-dialog-centered modal-dialog modal-lg">
			    <div class="modal-content">
			    	<div class="modal-header">
			        <h3 class="modal-title form-title">Certifications</h3>
			        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
			        <span aria-hidden="true">&times;</span>
			        </button>
			      	</div>
			    	<div class="modal-body">
			    		<form>
						  <div class="form-group">
						    <label for="certificationsname">Title/Name</label>
						    <input type="text" class="form-control" id="certificationsname" value={Input.title} onChange={handleInput} name="title" placeholder="Enter the title of your certificate"/>
						 	{console.log("Dasadd",Input)}
						 </div>
						  <div class="form-group">
						    <label for="certificationsbody">Certification body</label>
						    <input type="text" class="form-control"  id="certificationsbody" name="body" value={Input.body} onChange={handleInput} placeholder="Enter the certification body"/>
						  </div>
						  <div>
						    <label for="courAttachment" class="custom-file-upload">
						    	<input type="file" class="file-input" id="courAttachment"  onChange={fileUpload} name="Attachment" />
								<i class="fa fa-cloud-upload"></i> Custom Upload
							</label>
						  </div>
						  <div class="form-group">
						    <label for="Duration" class="d-sm-inline d-block">Duration</label>
							<YearPicker
								defaultValue={'select year'}
								start={2010}                
								end={2020}                  
								reverse   
								value={Input.DurationFrom}                  
								required={true}     
								onChange={(year)=>{
									setInput({...Input,'DurationFrom':year});
									console.log(year);
								}}
								name="DurationFrom"
							/>
						    <YearPicker
								defaultValue={'select year'}
								start={2010}                
								end={2020}                  
								reverse   
								value={Input.DurationTo}                  
								required={true}     
								onChange={(year)=>{
									setInput({...Input,'DurationTo':year});
									console.log(year);
								}}
								classes={'d-sm-inline d-block'}
								name="DurationTo"
							/>
						  </div>
						</form>
			        </div>
			        <div class="modal-footer">
						<div class="w-100 d-flex justify-content-between">
							<div>
								<button type="button" onClick={deleteChanges} class={"btn bg-yellow delete d-none"+(delet?'d-inline':'')} data-dismiss="modal">Delete</button>
							</div>
							<div>
								<button type="button" class="btn bg-yellow close-btn" data-dismiss="modal">Close</button>
								<button type="button" onClick={saveChanges} data-dismiss="modal" class="btn bg-yellow">Save changes</button>
							</div>
						</div>
			      </div>
			    </div>
			  </div>
			</div>
		</div>
	)
}

export default Certifications