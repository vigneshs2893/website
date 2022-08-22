import React, { useState } from "react"
// import Modal from "../Modal/Modal";
import ReactModal from 'react-modal';
import { ModalBody, ModalHeader } from "../Modal/Modal.css";
import '../../scss/modal.css';

ReactModal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,.3)';
ReactModal.defaultStyles.overlay.zIndex = 50;

const JobMeta = ({ data={} }) => {
  if(!data?.profile) {
    return null
  }

  return (
    <div className="meta-section">
      <h3>Job Profile</h3>
      <p>{data.profile}</p>
      <div className="meta-grid">
        <div className="bold">Job Type</div>
        <div>: {data.jobType.join(', ')}</div>
        <div className="bold">Location</div>
        <div>: {data.location.join(', ')}</div>
        <div className="bold">Education</div>
        <div>: {data.education}</div>
        <div className="bold">Skills</div>
        <div>: {data.skills.join(', ')}</div>
        <div className="bold">Experience</div>
        <div>: {data.experience}</div>
      </div>
    </div>
  )
}

const JobsList = ({ data }) => {
  const [selectedJob, setSelectedJob] = useState({});

  return (
    <>
      <div className="job-listing">
        {data.map((item, i) => {
          return (
            <div key={i} className="job-card" onClick={() => setSelectedJob(item)}>
              <h4 className="job-title">{item.title}</h4>
              <div className="job-tags">
                {
                  item.tags.map((tag, j) => <span key={j} className="job-tag-item">{tag}</span>)
                }
              </div>
              <p className="job-desc-short">{item.shortDescription}</p>
            </div>
          )
        })}
      </div>
      <ReactModal
        isOpen={selectedJob.title}
        onRequestClose={() => setSelectedJob({})}
        >
        <ModalHeader>
          <h1>{selectedJob.title}</h1>
          <span onClick={() => setSelectedJob({})} />
        </ModalHeader>
        <ModalBody>
          <JobMeta data={selectedJob?.description?.childrenMarkdownRemark?.[0]?.frontmatter} />
          <p dangerouslySetInnerHTML={{ __html: selectedJob?.description?.childrenMarkdownRemark?.[0]?.html }} />
        </ModalBody>
      </ReactModal>
    </>
  )
}

export default JobsList;
